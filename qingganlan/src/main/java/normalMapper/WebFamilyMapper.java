package normalMapper;

import java.util.List;
import normalPo.WebFamily;
import normalPo.WebFamilyExample;
import org.apache.ibatis.annotations.Param;

public interface WebFamilyMapper {
    int countByExample(WebFamilyExample example);

    int deleteByExample(WebFamilyExample example);

    int insert(WebFamily record);

    int insertSelective(WebFamily record);

    List<WebFamily> selectByExample(WebFamilyExample example);

    int updateByExampleSelective(@Param("record") WebFamily record, @Param("example") WebFamilyExample example);

    int updateByExample(@Param("record") WebFamily record, @Param("example") WebFamilyExample example);
}