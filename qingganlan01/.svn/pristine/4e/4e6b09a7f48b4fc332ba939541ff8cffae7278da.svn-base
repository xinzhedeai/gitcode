package normalMapper;

import java.util.List;
import normalPo.AccessToken;
import normalPo.AccessTokenExample;
import org.apache.ibatis.annotations.Param;

public interface AccessTokenMapper {
    int countByExample(AccessTokenExample example);

    int deleteByExample(AccessTokenExample example);

    int deleteByPrimaryKey(@Param("accessToken") String accessToken, @Param("usId") String usId);

    int insert(AccessToken record);

    int insertSelective(AccessToken record);

    List<AccessToken> selectByExample(AccessTokenExample example);

    AccessToken selectByPrimaryKey(@Param("accessToken") String accessToken, @Param("usId") String usId);

    int updateByExampleSelective(@Param("record") AccessToken record, @Param("example") AccessTokenExample example);

    int updateByExample(@Param("record") AccessToken record, @Param("example") AccessTokenExample example);

    int updateByPrimaryKeySelective(AccessToken record);

    int updateByPrimaryKey(AccessToken record);
}